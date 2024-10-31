import reflex as rx

def sidebar()->rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Find Tradesmen near you!"),
            
        rx.form(
            rx.vstack(
                rx.text("Enter your Location"),
            
            rx.input(placeholder="Enter your location",type="text"),
            ),
        ),),
        
        spacing="5",
        padding_x="1em",
        padding_y="1.5em",
        bg=rx.color("accent", 3),
        align="start",
        height="800px",
        width="20em",
    )