import { NavLink } from "react-router-dom";
import menuItems from "./menu"

export default function Sidebar() {
    return (
        <div style={{
            width: "220px",
            minHeight: "100vh",
            background: "#aec5cd"

        }}>
            <div
                style={{
                        padding: "12px",
                        textAlign: "center",
                        borderBottom: "1px solid grey",
                        fontSize: "24px"
                }}
            >Admin Panel</div>
            {menuItems.map((item, i) => (
                <NavLink key={i} to={item.path} style={({isActive}) => ({
                    display: "block",
                    color: isActive ? "white" : "black",
                    background: isActive ? "#542c20" : "transparent"
                })}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}