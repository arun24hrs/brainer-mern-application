
import { ProductType } from '../redux/products/product.actions'
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const ProductCard = (item:any) => {
    const {name,image, price, quantity, description} = item;
  return (
    <Box p={"8px"}>
                <Image src={image} width={"100%"} />
                <Heading size={"sm"}>{name}</Heading>
                <Text>${price}</Text>
                <Text>In Stock: {quantity} left</Text>
                <Text>{description}</Text>
              </Box>
  )
}

export default ProductCard