import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

describe('LoginScreen', () => {
    test('displays the login form', async () => {
        const navigation = {
            navigate: jest.fn(),
            replace: jest.fn(),
        } as any;

        await render(
            <LoginScreen navigation={navigation} route={{} as any} />
        );

        expect(screen.getByLabelText('Email address')).toBeTruthy();
        expect(screen.getByLabelText('Password')).toBeTruthy();
        expect(screen.getByLabelText('Forgot password')).toBeTruthy();
        expect(screen.getByLabelText('Login')).toBeTruthy();
    });
});

test('navigates to Reset Password when Forgot Password is pressed', async () => {
    const navigation = {
        navigate: jest.fn(),
        replace: jest.fn(),
    } as any;

    await render(
        <LoginScreen navigation={navigation} route={{} as any} />
    );

    await fireEvent.press(screen.getByLabelText('Forgot password'));

    expect(navigation.navigate).toHaveBeenCalledWith('ResetPassword');
});

test('navigates to Home when Login is pressed', async () => {
    const navigation = {
        navigate: jest.fn(),
        replace: jest.fn(),
    } as any;

    await render(
        <LoginScreen navigation={navigation} route={{} as any} />
    );

    await fireEvent.press(screen.getByLabelText('Login'));

    expect(navigation.replace).toHaveBeenCalledWith('Home');
});

test('allows the user to enter an email address', async () => {
    const navigation = {
        navigate: jest.fn(),
        replace: jest.fn(),
    } as any;

    await render(
        <LoginScreen navigation={navigation} route={{} as any} />
    );

    await fireEvent.changeText(
        screen.getByLabelText('Email address'),
        'test@example.com'
    );

    await waitFor(() => {
        expect(
            screen.getByLabelText('Email address').props.value
        ).toBe('test@example.com');
    });
});

test('shows and hides the password', async () => {
    const navigation = {
        navigate: jest.fn(),
        replace: jest.fn(),
    } as any;

    await render(
        <LoginScreen navigation={navigation} route={{} as any} />
    );

    const password = screen.getByLabelText('Password');
    expect(password).toHaveProp('secureTextEntry', true);

    await fireEvent.press(screen.getByLabelText('Show password'));
    expect(password).toHaveProp('secureTextEntry', false);

    await fireEvent.press(screen.getByLabelText('Hide password'));
    expect(password).toHaveProp('secureTextEntry', true);
});
