import getImmutableObject from './0-fromjs';

test('should convert a JavaScript object into an Immutable Map', () => {
  const input = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  };

  const result = getImmutableObject(input);

  expect(result.toJS()).toEqual(input); // Convert back to JS for comparison
});

