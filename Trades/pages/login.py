import reflex as rx
from .signup import SignupFormModel


class LoginState(rx.State):
    email: str = ""
    password: str = ""

    
    def validate_login(self):
            with rx.session() as session:
                self.users = session.exec(
                    SignupFormModel.select().where(
                        SignupFormModel.email.contains(self.email)
                    )
                ).all()

            if self.users:
                user = self.users[0]  
                if user.password == self.password:
                    return rx.redirect("/dashboard")
                else:
                    return rx.window_alert("Incorrect password")
            else:
                return rx.window_alert("Email not found")



def login() -> rx.Component:
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
                                "Sign in to your account",
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
                                "Email address",
                                size="3",
                                weight="medium",
                                text_align="left",
                                width="100%",
                            ),
                            rx.input(
                                placeholder="Enter your email",
                                type="email",
                                size="3",
                                width="100%",
                                on_change=LoginState.set_email, 
                            ),
                            justify="start",
                            spacing="2",
                            width="100%",
                        ),
                        rx.vstack(
                            rx.hstack(
                                rx.text(
                                    "Password",
                                    size="3",
                                    weight="medium",
                                ),
                                rx.link(
                                    "Forgot password?",
                                    href="#",
                                    size="3",
                                ),
                                justify="between",
                                width="100%",
                            ),
                            rx.input(
                                placeholder="Enter your password",
                                type="password",
                                size="3",
                                width="100%",
                                on_change=LoginState.set_password,
                            ),
                            spacing="2",
                            width="100%",
                        ),
                        rx.button("Sign in", size="3", width="100%",on_click=LoginState.validate_login),
                        rx.center(
                            rx.text("New here?", size="3"),
                            rx.link("Sign up", href="/signup/", size="3"),
                            opacity="0.8",
                            spacing="2",
                            direction="row",
                        ),
                        spacing="6",
                        width="100%",
                    ),
                    size="4",
                    max_width="28em",
                    width="100%",
                )
    )
    
