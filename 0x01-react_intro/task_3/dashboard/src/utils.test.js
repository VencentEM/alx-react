/*import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns current year', () => {
    expect(getFullYear()).toBe(2021);
});

test('correct footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns right notification', () => {
    expect(getLatestNotification()).toBe(
        '<strong>Urgent Requirement</strong> - complete by EOD'
    );
});
*/
import React from 'react';
import { act } from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'


// test to check getFullYear returns correct year
test('getFullYear returns correct year', () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    expect(getFullYear()).toBe(currentYear);     // Compare dynamically
});


// test to check that getFooter returns correct string
// when arg is false
test('getFooter returns correct string if false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// test to check that getFooter returns correct string
// when arg is true
test('getFooter returns correct string if true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});



// test to check that getLatestNotification returns correct
// html string
test('getLatestNotification returns correct html string', () => {
    expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});