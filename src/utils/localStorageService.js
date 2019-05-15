// Create a record
export const createRecord = (key, value) => {
    if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
    localStorage.setItem(key, value);
};

// Read a record
export const readRecord = key => {
    return localStorage.getItem(key);
};

// Update a record
export const updateRecord = (key, value) => {
    if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
    localStorage.setItem(key, value);
};

// Check for support
export const isLocalStorageSupported = () => !!window.localStorage;

// Store (create or update) record to local storage
export const storeToLocalStorage = (key, value) => {
    if (isLocalStorageSupported()) {
        if (readRecord(key)) {
            updateRecord(key, value);
        } else {
            createRecord(key, value);
        }
    }
};
