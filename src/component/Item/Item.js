import styled from "styled-components";
import style from "./Item.module.css";

const ContainerItem = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
`

const TitleItem = styled.div`
    width: 40%;
    position: relative;
`

const ButtonItem = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`

function ContentItems(params) {
    const { book } = params;
    // shorting description to 155 character
    // desc = desc.slice(0, 155) + "...";
    const title = book.title;
    const img = book.cover_id;

    return (
        <ContainerItem>

            <TitleItem>

                <h2>{title}</h2>

                <p>{book.desc}</p>

                <ButtonItem>
                    <button className={style.btn_buy}>Buy</button>
                    <button className={style.btn_rent}>Rent</button>
                </ButtonItem>

            </TitleItem>

            <div>
                <div>
                    <img src={`https://covers.openlibrary.org/b/id/${img}-M.jpg`} alt="rando-image" />
                </div>

            </div>
        </ContainerItem>
    )
}

export default ContentItems;