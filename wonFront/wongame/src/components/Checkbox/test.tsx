import { screen, waitFor } from '@testing-library/react';
import Checkbox from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('shoud render with label', () => {
    renderWhitTheme(<Checkbox label="checkbox Label" labelFor="check" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });
  it('should render without label', () => {
    renderWhitTheme(<Checkbox />);
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });
  it('should render with a black label', () => {
    renderWhitTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    });
  });
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWhitTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCkeck when status changes', async () => {
    const onCheck = jest.fn();
    renderWhitTheme(<Checkbox label="CheckBock" onCheck={onCheck} isChecked />);
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });
  it('should be  accessible with tab', () => {
    renderWhitTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
