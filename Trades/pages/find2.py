import reflex as rx
from .signup import SignupFormModel
from ..Components.sidebar import sidebar,FilterFormState

def entry_list(filter: SignupFormModel):
    return rx.box(
        rx.heading(filter.name),
        rx.text(filter.phone_number),
        padding='1em'
    )

def find() -> rx.Component:
    return rx.hstack(
        sidebar(),  # Sidebar on the left
        rx.flex(  # Flex container for the content that takes up the remaining space
            rx.center(  # Center the content horizontally and vertically in the remaining space
                rx.vstack(  # Stack heading and entries vertically
                    rx.heading("Results", size="4", color="gray.800", font_weight="semibold", margin_bottom="8"),
                    # Display the list of entries, ensuring they are centered horizontally
                    rx.container(
                        rx.foreach(FilterFormState.entries, entry_list),
                        spacing="5",  # Space between entries
                        align="center",  # Center items horizontally within the container
                        width="100%",  # Ensure the container takes up the full available width
                    ),
                ),
                spacing="5",  # Space between components inside rx.center
                align="center",  # Center the content vertically
                min_height="85vh",  # Minimum height of the container to maintain a good layout
            ),
            grow=True,  # Let the flex container take the remaining space after the sidebar
            width="100%",  # Ensure the container stretches across the full width
        ),
    )
