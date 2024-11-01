import reflex as rx

def sidebar()->rx.Component:
    return rx.card(
        rx.vstack(
            rx.hstack(
                rx.image(src="/logo.png",
                                width="2.5em",
                                height="auto",
                                border_radius="25%",),
                rx.heading("Find Tradesmen near you!",size="6",
                                as_="h2",
                                text_align="center",
                                width="100%",),
            ),
        rx.form(
            rx.vstack(
                rx.text("Enter your Location",size="3",
                                weight="medium",
                                text_align="left",
                                width="100%"),
            
            rx.input(placeholder="Enter your location",
                     type="text",
                     size="3",
                     width="100%",),
                     spacing="2",
            ),
            
            rx.vstack(
                rx.text("Choose a Profession",size="3",
                                weight="medium",
                                text_align="left",
                                width="100%"),
                rx.select(["Plumber", "Electrician", "Carpenter", "Painter", "Mechanic"],size="3",width="100%",),
            spacing="2",)
        ),spacing="5",),
        
        spacing="5",
        padding_x="1em",
        padding_y="1.5em",
        
        align="start",
        height="800px",
        width="20em",
    )