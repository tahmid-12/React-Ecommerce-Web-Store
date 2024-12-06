import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    // Button,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const ProductCard = ({  name, text, img, price, colors }) => {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={img}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography>{text}</Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">{price}$</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    {
                        // eslint-disable-next-line react/prop-types
                        colors?.map((color, index) => {
                            return <span className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4" key={index}>
                                {color}
                            </span>
                        })
                    }
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default ProductCard