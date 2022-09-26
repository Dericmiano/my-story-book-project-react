import Stack from "../components/Stack";
export default {
    title:'components/Stack',
    component:Stack,
    argTypes :{
        numberofChildren : {
            type:"number",
            defaultValue:4
        }
    }
}
const Templates = ({numberofChildren,...args}) => <Stack {...args}>
    {[...Array(numberofChildren).keys()].map(n=>(
        <div
        style={{
            width:"50px",
            height:"50px",
            backgroundColor: "Red",
            display : "flex",
            justifyContent:'center',
            alignItems:'center',
        }}
        >
            {n + 1}

        </div>
    ))}
</Stack>
export const Horizontal = Templates.bind({})
Horizontal.args={
    direction : "Row",
    spacing: 2,
    wrap: false

}

export const Vertical = Templates.bind({})
Vertical.args={
    direction : "column",
    spacing: 2,
    wrap: false

}
export const NoSpacing = Templates.bind({})
NoSpacing.args={
    direction : "Row",
    spacing: 0,
    wrap: false

}
export const WrapoverFlw = Templates.bind({})
WrapoverFlw.args={
    direction : "Row",
    spacing: 2,
    wrap: true

}