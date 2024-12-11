import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
    Button
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

// eslint-disable-next-line react/prop-types
const Cart = ({ openModal, setOpen }) => {

    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const dispatch = useDispatch();

    return (
        <>
            {
                cart.length > 0 ? <>
                    <Dialog className="border-0 outline-0" open={openModal} handler={() => setOpen(false)}>
                        <DialogHeader>Shopping Bag</DialogHeader>
                        <DialogBody divider>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col justify-center items-start">
                                            <div className="grid grid-cols-2 py-4">
                                                <div>
                                                    <img className="h-[125px] rounded-md" src={item.img} alt={item.img} />
                                                    <div className="flex flex-col items-start">
                                                        <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">{item.name}</h4>
                                                    </div>
                                                    <div className="max-w-xs">
                                                        <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">{item.text}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                            Selected Item: {" "}
                                                            <span className="ml-2">{item.size}</span>
                                                        </p>
                                                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                            Selected color:{" "}
                                                            <span
                                                                className="ml-2 rounded-full px-2"
                                                                style={{ backgroundColor: item.color }}
                                                            ></span>
                                                        </p>
                                                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                            Amount: {" "} <span className="ml-2">{item.amount}</span>
                                                        </p>
                                                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                            Single Item Price: {" "} <span className="ml-2">{item.price}$</span>
                                                        </p>
                                                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                                                            Total Item Prices: {" "} <span className="ml-2">{item.totalPrice}$</span>
                                                        </p>
                                                        <div className="pt-4">
                                                            <Tooltip content="Remove From the Cart" placement="bottom">
                                                                <Button size="m" color="red" ripple={true} variant="filled" onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </DialogBody>
                        <DialogFooter className="flex justify-start items-center">
                            <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                                Total Price of All Products: {" "}
                                <span className="ml-2">{totalPrice}$</span>
                            </p>
                        </DialogFooter>
                    </Dialog>
                </> : <>
                    <Dialog className="border-0 outline-0" open={openModal} handler={() => setOpen(false)}>
                        <DialogHeader>Shopping Bag</DialogHeader>
                        <DialogBody divider>
                            <div>
                                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                                    Your Bag is Empty
                                </h1>
                                <p className="text-black text-base font-inter tracking-normal leading-none">
                                    Add Some Products
                                </p>
                            </div>
                        </DialogBody>
                    </Dialog>
                </>
            }
        </>
    )
}

export default Cart