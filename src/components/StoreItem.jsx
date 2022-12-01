import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

export function StoreItem({ id, name, price, imgUrl }) {
    const quantity = 0
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} style={{ height: "200px", objectFit: "cover"}} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                <div className="mt-auto">
                    {quantity === 1 ? (
                        <Button className="w-100">+ Add To Cart</Button>
                    ) : (
                        <div className="d-flex flex-column align-items-center" style={{gap: ".5rem"}}>
                                <div className="d-flex justify-content-center align-items-center" style={{ gap: ".5rem" }}>
                                    <Button>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button>+</Button>
                                </div>
                                <Button variant="danger">Remove</Button>
                        </div>
                    )}
                </div>
                </Card.Body>
        </Card>
    )
}