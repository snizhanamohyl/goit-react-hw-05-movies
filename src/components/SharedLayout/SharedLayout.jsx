import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";
import { Suspense } from "react";

export default function SharedLayout() {
    return <Container>
        <Header/>
        <Suspense fallback={<div>Loading page...</div>}><Outlet /></Suspense>
    </Container>
}