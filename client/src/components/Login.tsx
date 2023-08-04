import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useToast } from "@chakra-ui/react";
import { loginError, loginRequest, loginSuccess } from '../redux/auth/login.actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
    const dispatch = useAppDispatch();
    const {isLoading, isError, isAuth, details} = useAppSelector((store)=>store.loginReducer)
    const navigate = useNavigate()
    const toast = useToast();
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if(e.target.name === "password"){
            setPassword(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }

    if(isAuth){
      navigate("/products")
    }
    const handleFormSubmit = ():void => {
        if (email === "" || password === "") {
            toast({
              title: "Warning! Form Incomplete",
              description: "Please fill all the details",
              status: "warning",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            return;
        }
        else {
          dispatch(loginRequest())
          axios.post("http://localhost:8080/users/login",{email,password}).then((res)=> dispatch(loginSuccess(res.data))).catch((err)=> dispatch(loginError()))
        }
    }
    

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} name='email' onChange={(e)=>handleChange(e)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} name='password' onChange={(e)=>handleChange(e)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              onClick={handleFormSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {isLoading? "Loggin in..." : "Sign in"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}