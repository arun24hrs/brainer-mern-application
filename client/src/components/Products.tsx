import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  ProductType,
  errorProds,
  getProds,
  postProds,
  requestProds,
} from "../redux/products/product.actions";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [page, setPage] = React.useState(1);
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const { isLoading, isError, products } = useAppSelector(
    (store) => store.productReducer
    );
    const [data,setData] = React.useState([products])
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(+e.target.value);
    } else if (e.target.name === "quantity") {
      setQuantity(+e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };
  console.log(products, page);
  const handleAddProduct = () => {
    if (
      name !== "" ||
      price !== 0 ||
      image !== "" ||
      quantity !== 0 ||
      description !== ""
    ) {
      const newProd: ProductType = {
        name,
        price,
        quantity,
        image,
        description,
      };
      console.log("clicked");
      dispatch(requestProds());
      axios
        .post("http://localhost:8080/products/add", newProd)
        .then((res) => dispatch(postProds()))
        .catch((err) => dispatch(errorProds()));
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

    getProductsData();
  };

  const getProductsData = () => {
    axios
      .get(`http://localhost:8080/products?page=${page}`)
      .then((res) => dispatch(getProds(res.data)))
      .catch((err) => dispatch(errorProds()));
  };

  const handlePage = (page: number) => {
    setPage((prev) => prev + page);
  };

  React.useEffect(() => {
    setData(products)
    getProductsData();
  }, [page, data]);

  return (
    <HStack>
      <VStack
        maxW={"500px"}
        borderRight={"1px solid gray"}
        minH={"100vh"}
        p={5}
      >
        <Heading size={"md"} m={"30px"}>
          Add Products
        </Heading>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="image">
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              value={image}
              name="image"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input
              type="nubmer"
              value={price}
              name="price"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              value={quantity}
              name="quantity"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              value={description}
              name="description"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              onClick={handleAddProduct}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              {isLoading ? "Adding..." : "Add Product"}
            </Button>
          </Stack>
        </Stack>
      </VStack>
      <VStack alignContent={"center"} alignItems={"center"}>
        <Box>
          <Heading size={"lg"}>All Products</Heading>
        </Box>
        <HStack>
          {
            data.map((el:ProductType) => (
              <ProductCard key=
              {Date.now()+Math.random()} {...el}/>
            ))}
        </HStack>
        <HStack>
          <Button
            isDisabled={page === 1 ? true : false}
            onClick={() => handlePage(-1)}
          >
            Prev.
          </Button>
          <Button isDisabled={true}>{page}</Button>
          <Button onClick={() => handlePage(1)}>Next</Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Products;
