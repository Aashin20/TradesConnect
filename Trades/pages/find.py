import reflex as rx
from .signup import SignupFormModel


class FilterFormState(rx.State):
    location:str=""
    profession: str=""
    
    def Filter(self):
            with rx.session() as session:
                self.tradesmen = session.exec(
                    SignupFormModel.select().where(
                        SignupFormModel.location.contains(self.location), SignupFormModel.profession.contains(self.profession)
                    )
                ).all()
            print(self.tradesmen)


def find()->rx.Component:
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
                     width="100%",
                     on_change=FilterFormState.set_location,),
                     spacing="2",
            ),
            rx.spacer(height="1em"),
            rx.vstack(
                rx.text("Choose a Profession",size="3",
                                weight="medium",
                                text_align="left",
                                width="100%"),
                rx.select(["Plumber", "Electrician", "Carpenter", "Painter", "Mechanic"],size="3",width="100%", on_change=FilterFormState.set_profession),
            spacing="2",),
            rx.spacer(height="1em"),
            rx.button("Filter",type="submit",on_click=FilterFormState.Filter),
        ),spacing="5",),
        
        spacing="10",
        padding_x="1em",
        padding_y="1.5em",
        
        align="start",
        height="800px",
        width="20em",
    )