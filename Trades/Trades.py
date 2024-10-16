"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from reflex_lottiefiles import LottieFiles
from rxconfig import config
from .pages.login import login
from .pages.signup import signup
from .pages.find import find
from .pages.dashboard import dashboard

class State(rx.State):
    """The app state."""

    ...


def index() -> rx.Component:
    
     return rx.container(
            
             rx.box(
                rx.hstack(
                    rx.image(src="/logo.png", width="50px"),
                    rx.text("TradesConnect", font_size="2rem", font_weight="bold"),
                    rx.spacer(),
                    rx.link("Home", href="#", padding="1rem"),
                    rx.link("Features", href="#features", padding="1rem"),
                    rx.link("Contact", href="#contact", padding="1rem"),
                ),
                padding="1rem",
                background_color="blue.500",
                color="white",
            ),
            
            rx.box(
                rx.vstack(
                    rx.heading("Connecting Local Tradesmen with Customers", size="xl", color="blue.700"),
                    rx.text(
                        "Find skilled tradesmen in your area for your home or business needs.",
                        font_size="1.2rem", color="gray.700",
                        width="50%"
                    ),
                rx.hstack(
                    rx.button("I am a Tradesman", color_scheme="blue", size="lg",on_click=rx.redirect("/login/"),),
                    rx.button("Looking for a Tradesman", color_scheme="green", size="lg", on_click=rx.redirect("/find/")),
                ),
                ),
                padding="5rem",
                text_align="center",
                background_color="gray.100",
            ),
          
            rx.box(
                rx.heading("Why Choose TradesConnect?", size="lg", id="features", padding="2rem"),
                rx.hstack(
                    rx.box(
                        rx.box(
                             LottieFiles(
                             src="https://lottie.host/e1565000-ff34-4aed-809e-913fc6a93cb5/6YwiYO4TIk.json",
                             autoplay=True,
                             loop=True,
                             ),
                            id="lottie-animation-reliable",
                            width="150px",  
                            height="150px",  
                            position="relative",
                        ),
            
                        rx.text("Reliable Tradesmen", font_size="1.2rem", font_weight="bold", color="blue.600"),
                        rx.text("Verified professionals ready to assist you.", color="gray.600", text_align="center")
                    ),
                    rx.box(
                         rx.box(
                             LottieFiles(
                             src="https://lottie.host/2a484378-9f0e-4b63-825b-3950c7b17482/3ItfzWCOUv.json",
                             autoplay=True,
                             loop=True,
                             ),
                            id="lottie-animation-reliable",
                            width="150px",  
                            height="150px",  
                            position="relative",
                        ),
                        rx.text("Secure Payments", font_size="1.2rem",font_weight="bold"),
                        rx.text("Secure online payments for hassle-free transactions.")
                    ),
                    rx.box(
                        rx.box(
                             LottieFiles(
                                  src="https://lottie.host/3a3abfd9-bd0d-4d36-832f-73ba9d090bcf/KW2aXhCml0.json",
                                  autoplay=True,
                                  loop=True,
                             ),
                            width="150px",  
                            height="150px",  
                            position="relative",
                        ),
                        
                        rx.text("24/7 Support", font_size="1.2rem",font_weight="bold"),
                        rx.text("We are here to help at every step.")
                    ),
                ),
                padding="2rem",
                justify_content="space-evenly",
            ),
            
            rx.box(
                rx.heading("Contact Us", size="lg", id="contact", padding="2rem"),
                rx.vstack(
                    rx.text("Got a question? We'd love to hear from you!"),
                    rx.input(placeholder="Your Name", width="40%"),
                    rx.input(placeholder="Your Email", width="40%"),
                    rx.text_area(placeholder="Your Message", width="40%"),
                    rx.button("Send Message", color_scheme="blue"),
                ),
                padding="3rem",
                text_align="center",
                background_color="gray.200",
            ),
           
            rx.box(
                rx.text("© 2024 TradesConnect. All Rights Reserved.", padding="2rem"),
                background_color="blue.500",
                color="white",
                text_align="center",
            ),
        )


def dashboard():
     return rx.box(
          rx.text("Coming Soon!")
     )

app = rx.App()
app.add_page(index)
app.add_page(login)
app.add_page(signup)
app.add_page(find)
app.add_page(dashboard)


