import { NavLink } from "react-router-dom"

export default interface HeaderNavLinkProps {
    linkTitle: string,
    linkRoute: string,
    textColor: string
}

export const HeaderNavLink = ({ linkTitle, linkRoute, textColor }: HeaderNavLinkProps) => {
    let classes = "nav-link ps-0 col-10 col-md-4 align-self-center " + textColor;
    return (
        <NavLink to={`${linkRoute}`} className={classes}>{linkTitle}</NavLink>
    )
}