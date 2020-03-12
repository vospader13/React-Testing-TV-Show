import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';


test("", () => {
    const { queryAllByTestId, rerender } = render(
        <Episodes error="" episodes={[]} />
    );
    expect(queryAllByTestId("episodes")).toStrictEqual([]);
    expect(queryAllByTestId("episodes")).toHaveLength(0);
});