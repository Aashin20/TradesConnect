import reflex as rx
from ..pages.signup import SignupFormModel

def entry_list(filter: SignupFormModel):
    return rx.box(
        rx.heading(filter.name),
        rx.text(filter.phone_number),
        padding='1em'
    )

class FilterFormState(rx.State):
    location: str = ""
    profession: str = ""
    entries: list['SignupFormModel'] = []

    def Filter(self):
        with rx.session() as session:
            entries = session.exec(
                SignupFormModel.select().where(
                    SignupFormModel.location.contains(self.location),
                    SignupFormModel.profession.contains(self.profession)
                )
            ).all()
            self.entries = entries

def find() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.card(
                rx.vstack(
                    rx.center(
                        rx.image(
                            src="/logo.png",
                            width="2.5em",
                            height="auto",
                            border_radius="25%",
                        ),
                        rx.heading(
                            "Find Tradesmen Near You!",
                            size="6",
                            as_="h2",
                            text_align="center",
                            width="100%",
                        ),
                        direction="column",
                        spacing="5",
                        width="100%",
                    ),
                    rx.vstack(
                        rx.text(
                            "Location",
                            size="3",
                            weight="medium",
                            text_align="left",
                            width="100%",
                        ),
                        rx.input(
                            placeholder="Enter your location",
                            type="email",
                            size="3",
                            width="100%",
                            on_change=FilterFormState.set_location,
                        ),
                        justify="start",
                        spacing="2",
                        width="100%",
                    ),
                    rx.vstack(
                        rx.text(
                            "Profession",
                            size="3",
                            weight="medium",
                            text_align="left",
                            width="100%",
                        ),
                        rx.select(
                            ["Plumber", "Electrician", "Carpenter", "Painter", "Mechanic"],
                            on_change=FilterFormState.set_profession,
                            size="3", width="100%", required=True,
                        ),
                        justify="start",
                        spacing="2",
                        width="100%",
                    ),
                    rx.button("Filter", size="3", width="100%", on_click=FilterFormState.Filter),
                    spacing="6",
                    width="100%",
                ),
                size="4",
                max_width="28em",
                width="100%",
            ),
            rx.center(
                rx.vstack(
                    rx.heading("Results", size="5", color="gray.800", font_weight="bold", margin_bottom="8"),
                    rx.container(
                        rx.foreach(FilterFormState.entries, entry_list),
                        spacing="5",
                        align="center",
                        width="100%",
                    ),
                ),
                spacing="5",
                align="center",
                min_height="50vh",
            ),
        )
    )
