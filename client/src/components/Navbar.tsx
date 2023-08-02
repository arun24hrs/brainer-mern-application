import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box p={"20px"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"} borderBottom={"1px solid blue"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Image src='https://th.bing.com/th/id/R.c3a28cfd897281dd0013692b0eb40775?rik=wP4PmcEJ6jiMVw&riu=http%3a%2f%2fbrainerhub.com%2fimages%2fbrainerhub_logo.png&ehk=LriaM%2f3vkLqIkFvCjXkTylotTAZGlvTO24NhsZuRvlM%3d&risl=&pid=ImgRaw&r=0' alt='logo' width={{base: "100px", md: "200px"}}/>
        <Link to="/products"><Button colorScheme="blue" size={{base: "xs", md: "md", lg: "lg"}}>Products</Button></Link>
        <Link to={"/signup"}><Button colorScheme="blue" size={{base: "xs", md: "md", lg: "lg"}}>Sign Up</Button></Link> 
        <Link to={"/login"}><Button colorScheme="blue" size={{base: "xs", md: "md", lg: "lg"}}>Login</Button></Link>
        
      </Flex>
    </Box>
  )
}

export default Navbar