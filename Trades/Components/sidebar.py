import reflex as rx

def sidebar():
    return rx.box(
        rx.vstack(
            rx.text("Location:"),
            rx.input(placeholder="Enter your location", width="100%"),
            
            rx.text("Profession:"),
            rx.select(
                items=["Plumber", "Electrician", "Painter"],
                placeholder="Select your profession",
                width="100%",
            ),
            
            rx.link("Homepage", href="/", style={"color": "blue", "text-decoration": "none"}),
            
            rx.button("Are you a tradesman?", color="white", bg="blue"),
            
            spacing="20px",  # Add space between elements
            padding="10px",  # Add padding around the sidebar
        ),
        width="250px",  # Set the width of the sidebar
        padding="20px",  # Padding inside the sidebar box
        border="1px solid #ddd",  # Light border for styling
        height="100vh",  # Full-height sidebar
    )


