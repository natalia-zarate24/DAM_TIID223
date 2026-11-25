import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen //identifica un tipo de navegacion no primaria
                name="(tabs)" 
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="detalle" 
                options={{ title: "Detalle de usuario" }}
            />

            <Stack.Screen 
                name="actualiza" 
                options={{ title: "Cambios del usuario" }}
            />
        </Stack>
    )
}