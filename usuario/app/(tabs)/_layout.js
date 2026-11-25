import { Tabs } from "expo-router";

export default function tabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title:"inicio",
                    href:null,
                }}
            />

            <Tabs.Screen
                name="alta"
                options={{
                    title:"formulario"
                }}
            />
            <Tabs.Screen
                name="consulta"
                options={{
                    title:"listado"
                }}
            />
        </Tabs>
    )
}