import reflex as rx
from sqlmodel import Field

class SignupFormModel(rx.Model,table=True):
    name:str
    email:str= Field(primary_key=True)
    password:str
    profession:str
    phone_number:int
    location:str
    
class SignupFormState(rx.State):
    form_data: dict = {
        "name": "",
        "email": "",
        "password": "",
        "profession": "" ,
        "phone_number":"",
        "location": "", 
    }

    def update_form(self, field, value):
        self.form_data[field] = value
    def retrieve_data(self):
        with rx.session() as session:
            entries = session.query(SignupFormModel).all() 
            for entry in entries:
                print(f"Name: {entry.name}, Email: {entry.email}, Profession: {entry.profession}, "
                    f"Phone Number: {entry.phone_number}, Location: {entry.location}")


    def submit(self):
        if all(self.form_data.values()):  
            print("Form submitted:", self.form_data)
            with rx.session() as session:
                db_entry = SignupFormModel(**self.form_data)
                session.add(db_entry) 
                session.commit()  
                self.retrieve_data()
            
    def handle(self):
        self.submit()
        return rx.redirect("/login/")
        
        


def signup():
    return rx.center(
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
                                "Sign up to TradesConnect",
                                size="6",
                                as_="h2",
                                text_align="center",
                                width="100%",
                            ),
                            direction="column",
                            spacing="5",
                            width="100%",
                        ),
            
            rx.form(
            rx.vstack(
                rx.vstack(
                            rx.text(
                                "Name",
                                size="3",
                                weight="medium",
                                text_align="left",
                                width="100%",
                            ),
                rx.input(placeholder="Enter your Name",size="3",width="100%", required=True, on_change=lambda value: SignupFormState.update_form("name", value)) , 
                justify="start",
                spacing="2",
                width="100%",),
                rx.vstack(
                            rx.text(
                                "Email",
                                size="3",
                                weight="medium",
                                text_align="left",
                                width="100%",
                            ),
                
                rx.input(placeholder="Enter your Email",type="email",size="3",required=True,width="100%", on_change=lambda value: SignupFormState.update_form("email", value)),  
                justify="start",
                spacing="2",
                width="100%",),
                rx.vstack(
                            rx.hstack(
                                rx.text(
                                    "Password",
                                    size="3",
                                    weight="medium",
                                ),
                                justify="between",
                                width="100%",
                            ),
                rx.input(placeholder="Password",type="password",size="3",width="100%",required=True, on_change=lambda value: SignupFormState.update_form("password", value)),
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
                    on_change=lambda value: SignupFormState.update_form("profession", value),
                    size="3",width="100%",required=True,
                ),
                justify="start",
                spacing="2",
                width="100%",
                ),
                rx.vstack(
                            rx.text(
                                "Phone Number",
                                size="3",
                                weight="medium",
                                text_align="left",
                                width="100%",
                            ),
                rx.input(placeholder="Enter your Phone Number",type="number",required=True,size="3",width="100%", on_change=lambda value: SignupFormState.update_form("phone_number", value)),
                justify="start",
                spacing="2",
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
                rx.input(placeholder="Location", size="3",width="100%",required=True,on_change=lambda value: SignupFormState.update_form("location", value)),
                justify="start",
                spacing="2",
                width="100%",
                ),
                rx.button("Sign Up",size="3", on_click=SignupFormState.handle),
            ),
            size="4",
            max_width="28em",
            width="100%",
            spacing=4,
            padding=5,
            align="center",
            justify="center",
        )
        ),
            size="4",
            max_width="28em",
            width="100%",)
    )




