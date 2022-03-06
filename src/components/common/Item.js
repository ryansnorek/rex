function Item({ Component, user }) {

    return (
        <div className="item-wrapper">
            <section>
                <Component user={user} />
            </section>
        </div>
    )
}
export default Item;