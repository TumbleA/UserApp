import {Button,  Text, View}  from 'react-native'

const Login = ({navigation}) => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title='Register' onPress={()=> navigation.navigate('Register')} ></Button>
        </View>
    );
};

export default Login;