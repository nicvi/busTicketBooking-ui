import { render, waitFor, screen } from "@testing-library/react";
import { CityProvider } from "./CityProvider";
import { CityContext } from "./CityContext";
import { getCities } from "../../services";
import React from "react";
import {CityContextValue} from "./CityContextType";


jest.mock("../../services", () => ({
    getCities: jest.fn(),
}));

describe("CityProvider", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should initialize with default values", () => {
        const expectedContextVal: CityContextValue = {
            cities: [],
            error: "",
            fetchCities: ()=>{return {}},
            loading: true
        }
        render(
            <CityProvider>
                <CityContext.Consumer>
                    {(context) => (
                        <div data-testid="city-context">
                            {context.cities.length} {String(context.loading)} {context.error}
                        </div>
                    )}
                </CityContext.Consumer>
            </CityProvider>
        );

        const cityContext = screen.getByTestId("city-context");

        expect(cityContext.textContent).toBe(
            `${expectedContextVal.cities.length} ${String(expectedContextVal.loading)} ${expectedContextVal.error}`
        );
    });

    it('should fetch and update cities successfully', async () => {
        const mockCities = ['City 1', 'City 2'];
        (getCities as jest.Mock).mockResolvedValueOnce(mockCities);

        const TestComponent = () => {
            const context = React.useContext(CityContext);

            React.useEffect(() => {
                context.fetchCities();
            }, [context]);

            return (
                <div data-testid="city-context">
                    {context.cities.length} {String(context.loading)} {context.error}
                </div>
            );
        };

        render(
            <CityProvider>
                <TestComponent />
            </CityProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("city-context").textContent).toContain(String(mockCities.length));
        });
    });


    it("should handle error when fetching cities fails", async () => {
        const errorMessage = "Failed to fetch";
        (getCities as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        const TestComponent = () => {
            const context = React.useContext(CityContext);

            React.useEffect(() => {
                context.fetchCities();
            }, [context]);

            return (
                <div data-testid="city-context">
                    {context.cities.length} {String(context.loading)} {context.error}
                </div>
            );
        };

        render(
            <CityProvider>
                <TestComponent />
            </CityProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("city-context").textContent).toContain(errorMessage);
        });
    });
});
