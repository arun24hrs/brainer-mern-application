'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../redux/store"
import { useToast } from '@chakra-ui/react'
import { SignupType, signupError, signupLoading, signupSuccess } from '../redux/auth/signup.actions'
import axios from 'axios'


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const toast = useToast()
  const {isLoading, isError, details} = useAppSelector((store)=> store.signupReducer);

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "name"){
            setName(e.target.value)
        } else if(e.target.name === "password"){
            setPassword(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }

    const handleSignup = () => {
      if(name!=="" || email!=="" || password!==""){
        const signupDetails:SignupType = {
          name, email, password
        }
        dispatch(signupLoading())
        axios.post('http://localhost:8080/users/register', signupDetails).then((res)=> dispatch(signupSuccess(res.data))).catch((err)=> dispatch(signupError()))
        } else {
          toast({
            title: "Form Incomplete!",
            description: "Please fill all the details",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
        
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} width={"400px"} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" name="name" value={name} onChange={(e)=>handleInput(e)}/>
                </FormControl>
              </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={email} onChange={(e)=>handleInput(e)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={(e)=>handleInput(e)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {isLoading? "Submitting":"Sign up"}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login"><Text color="blue.400" as={"span"}>Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}