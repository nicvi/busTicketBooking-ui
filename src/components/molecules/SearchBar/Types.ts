interface stylesPropTypes {
    [key: string]: string | {[key: string]: string | {[key: string]: string}};
}
interface SearchBarPropTypes {
    handleOnClick: () => void;
    placeholder: string;
    styles?: stylesPropTypes;
}

export default SearchBarPropTypes;
