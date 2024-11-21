import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object into an Immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} Immutable Map representation of the object.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}

