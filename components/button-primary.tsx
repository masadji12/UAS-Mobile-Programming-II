import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SPACING } from "@/constants/spacing";
import { COLORS } from "@/constants/colors"

type PrimaryButtonProps = {
    title: string;
    onPress?: () => void;
    variant?: 'primary' | 'danger' | 'outline';
    fullWidth?: boolean;
    disabled?: boolean;
};

export default function PrimaryButton({
    title,
    onPress,
    variant = 'primary',
    fullWidth = true,
    disabled = false,
}: PrimaryButtonProps) {
    const backgroundColor = 
        variant === 'danger' ? COLORS.danger : variant === 'outline' ? 'transparent' : COLORS.primary;
    const borderColor = variant === 'outline' ? COLORS.primary : 'transparent';
    const color = variant == 'outline' ? COLORS.primary : COLORS.white;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                {backgroundColor, borderColor, width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.6 : 1}
            ]}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, {color}]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: SPACING.sm + 2,
        paddingHorizontal: SPACING.lg,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {fontWeight: '700'},
});