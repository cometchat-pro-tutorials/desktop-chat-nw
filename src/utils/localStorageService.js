import { debounce } from 'lodash';

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

// Delete a record
export const deleteRecord = key => {
    if (!key) { return { error: 'Store to localStorage failed. Invalid key.' }; }
    localStorage.removeItem(key)
};

// Clear all
export const clearAll = () => localStorage.clear();

// Check for stored items
export const hasStoredItems = () => localStorage.length > 0;

// Check for support
export const isLocalStorageSupported = () => !!window.localStorage;

// Store (create or update) record to local storage with some delay (e.g. 1500 ms)
export const storeToLocalStorageDebounced = debounce((key, value) => {
    if (isLocalStorageSupported()) {
        if (readRecord(key)) {
            updateRecord(key, value);
        } else {
            createRecord(key, value);
        }
    }
}, 1500, {leading: false});

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
