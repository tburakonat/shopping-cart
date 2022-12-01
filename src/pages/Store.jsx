import storeItems from "../data/items.json"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StoreItem } from "../components/StoreItem"

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems.map(item => {
                    return <Col key={item.id}>{<StoreItem {...item} />}</Col>
                })}
            </Row>
        </>
    )
}