import { SigninStyle } from '@/styles/signin';
import { Text, View } from 'react-native';

const SignInPage = () => {
	const { container } = SigninStyle();
	return (
		<View style={container}>
			<Text>Sign In</Text>
			<Text>Sign In</Text>
			<Text>Sign In</Text>
			<Text>Sign In</Text>
			<Text>Sign In</Text>
		</View>
	);
};

export default SignInPage;
