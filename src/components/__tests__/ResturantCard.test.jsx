import { render, screen } from "@testing-library/react";
import ResturantCard from '../ResturantCard'
import Mok_Data from '../mocks/resCardData.json'
import "@testing-library/jest-dom"

it('should render resturant card', () => {

    // render

    render(<ResturantCard resData={Mok_Data} />);


    // query

    const name = screen.getByText('Pizza Hut');

    // assertion

    expect(name).toBeInTheDocument();

});