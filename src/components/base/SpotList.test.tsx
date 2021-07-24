import { ApolloProvider } from '@apollo/client';
import { client } from '../../apollo-client';
import { render, screen } from '../../mocks/test-utils';
import SpotList from './SpotList';

describe("SpotList component", () => {
  it("should display a list of spots", async () => {
    const initialState = { spot: { spots: [{ id: 1, name: "Beach 1" }] } };
    render(
      <ApolloProvider client={client}>
        <SpotList />
      </ApolloProvider>,
      { initialState }
    );
    expect(await screen.findByText("Beach 1")).toBeDefined();
  });
});
