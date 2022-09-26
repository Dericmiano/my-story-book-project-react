
import Button from "../components/Button";
export default {
    title:'components/Button',
    component:Button,
    argTypes: {handleClick:{action: "handleClick"}}
}
const Templates = (args) => <Button {...args}/>

// export const Red = () => <Button label='press me' backgroundColor="Red" />
export const Red = Templates.bind({})
Red.args = {
    backgroundColor:"Red",
    label : "Press me",
    size : "md",
}

export const Green = Templates.bind({})
Green.args = {
    backgroundColor:"Green",
    label : "Press me",
    size : "md",
}

export const Small = Templates.bind({})
Small.args = {
    backgroundColor:"Red",
    label : "Press me",
    size : "sm",
}

export const Large = Templates.bind({})
Large.args = {
    backgroundColor:"Red",
    label : "Press me",
    size : "lg",
}

export const LngLabel = Templates.bind({})
LngLabel.args = {
    backgroundColor:"Red",
    label : "Press me presss me am lng labrl",
    size : "md",
}
