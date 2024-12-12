/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
    id,
    img,
    name,
    text,
    size,
    price,
    color,
    totalPrice
}) => {

    
    const dispatch = useDispatch();

    const defaultSize = size[0];
    const defaultColor = color[0];

    console.log(defaultColor);

    return (
        <div>
            <Card className="w-96">
                <CardHeader floated={false} className="h-96">
                    <img src={img} alt={text} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="gray" className="font-medium" textGradient>
                        {text}
                    </Typography>
                    <div className="flex justify-between items-center pt-4">
                        <Typography color="gray" className="font-medium" textGradient>
                            Size Left: {defaultSize}
                        </Typography>
                        <Typography color="gray" className="font-medium" textGradient>
                            Color: {" "}
                            <span className="px-2 rounded-full ml-2" style={{ backgroundColor: defaultColor }} />
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Add To Cart" placement="bottom">
                        <Button onClick={() =>
                            dispatch(
                                addToCart({
                                    id: id,
                                    img: img,
                                    text: text,
                                    amount: 1,
                                    price: price,
                                    totalPrice: totalPrice,
                                    name: name,
                                    size: defaultSize,
                                    color: defaultColor,
                                })
                            )
                        } 
                        size="lg" 
                        color="gray" 
                        variant="outlined" 
                        ripple={true}>
                            Add To Cart
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductSectionItem