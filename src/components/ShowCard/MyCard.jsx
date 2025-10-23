import { memo } from "react"
const MyCard = memo(({title, desc}) => {
    return (
        <div className="border ">
            <h2>
                {title}
            </h2>

            <p>
                {desc}
            </p>
        </div>
    )
});

export default MyCard;