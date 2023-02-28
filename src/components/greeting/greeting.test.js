import { render, screen } from "@testing-library/react";
import Greeting from "./greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);
        //Act
        // ... nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "good to see you" if the button was clicked', () => {
        render(<Greeting />);
        const goodToSeeYouElement = screen.getByText('good to see you', {exact: false});
        expect(goodToSeeYouElement).toBeInTheDocument();
    });
    test('renders "Changed!" if we clicked button', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });
    test('does not render "good to see you" if the button was clicked', () => {
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText('good to see you', {exact: false});
        expect(outputElement).toBeNull();
    });
});
