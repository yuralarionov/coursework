import { fireEvent,render,screen } from "@testing-library/react";
import { Modal } from "./contact";


test('changes the class when clicked', () => {
    const fn = jest.fn();

  render(<Modal closeModal={fn} />);

  const modalBody = screen.getByTestId("modal-body");
  const modalOut = screen.getByTestId("modal-out");
  const modalCross = screen.getByTestId("modal-cross");

  fireEvent.click(modalBody);

  expect(fn.mock.calls).toHaveLength(0);

  fireEvent.click(modalOut);

  expect(fn.mock.calls).toHaveLength(1);
  
  fireEvent.click(modalCross);
  expect(fn.mock.calls).toHaveLength(2);

})