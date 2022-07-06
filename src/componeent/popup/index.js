import React, { useState } from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { fonts, color, fontSize } from "../../utils"

const App = () => {
    const [visiable, setVisiable] = useState(false)

    return (
        <View style={styles.parentContainer}>
            <TouchableOpacity
                onPress={() => { setVisiable(true) }}
                style={{ width: "40%", alignItems: 'center', justifyContent: 'center', backgroundColor: color.red }}>
                <Text style={[styles.txtUser, { padding: 10 }]}>Click me</Text>
            </TouchableOpacity>

            <Modal visible={visiable}
                transparent={true}
                >
                <View style={styles.parentContainer}>
                    <View style={styles.container}>
                        <View style={styles.topContain}>
                            <Text style={styles.txtTitle}>Tạo đơn thành công</Text>
                            <Text style={{position:'absolute', right:0, top:0, color:color.white, fontSize:fontSize.fontSite20}}
                            onPress={()=>{setVisiable(false)}}>X</Text>
                        </View>
                        <View style={styles.containBody}>
                            <Text style={styles.txt1}>Mã đơn hàng : </Text>
                            <View style={styles.containUser}>
                                <Text style={styles.txtUser}>16870606166484 </Text>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={styles.btnUser}>
                                    <Text style={styles.txtButton}>Chờ lấy</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.txt1}>Người nhận :</Text>
                            <Text style={styles.txtAddress}>Nguyễn Văn Phương - 0388745635</Text>
                            <Text style={styles.txtAddress}>
                                Khu 1, xóm Cẩm Sơn, xã Liên Hoa, huyện Phù Ninh, tỉnh Phú Thọ X.Liên Hoa, H.Phù Ninh, T.Phú Thọ
                            </Text>
                            <View style={styles.underline} />
                            <View style={styles.containBTn}>
                                <TouchableOpacity style={[styles.Btn, { backgroundColor: color.blue, marginLeft: 0 }]}>
                                    <Text style={styles.txtBtnBottom}>In đơn</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.Btn, { backgroundColor: color.red }]}>
                                    <Text style={styles.txtBtnBottom}>Chi tiết</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.Btn, { backgroundColor: color.white, borderColor: color.red, borderWidth: 1 }]}>
                                    <Text style={[styles.txtBtnBottom, { color: color.red }]}>Tạo mới</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        width: "100%",
        height: '100%',
        backgroundColor: color.gray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: { width: "95%" },
    topContain: {
        backgroundColor: color.red,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16
    },
    txtTitle: {
        fontSize: fontSize.fontSite20,
        color: color.white,
        fontFamily: fonts.beauSanProBold
    },
    containBody: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    txt1: {
        fontSize: fontSize.fontSite18,
        color: color.black,
        marginTop: 10,
        fontFamily: fonts.beauSanProBold
    },
    containUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txtUser: {
        fontSize: fontSize.fontSite14,
        color: color.blue,
        fontFamily: fonts.beauSanProRegular
    },
    btnUser: {
        borderRadius: 10,
        backgroundColor: color.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%'
    },
    txtButton: {
        color: color.white,
        fontSize: fontSize.fontSite14,
        fontFamily: fonts.beauSanProRegular,
        padding: 8
    },
    txtAddress: {
        fontSize: fontSize.fontSite14,
        color: color.black,
        fontFamily: fonts.beauSanProRegular,
        marginTop: 10
    },
    underline: {
        width: '100%',
        height: 1,
        backgroundColor: color.gray,
        marginVertical: 15
    },
    containBTn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,

    },
    txtBtnBottom: {
        fontSize: fontSize.fontSite16,
        color: color.white,
        fontFamily: fonts.beauSanProRegular,
        padding: 8
    },
    txtTaoMoi: {
        fontSize: fontSize.fontSite16,
        color: color.red,
        fontFamily: fonts.beauSanProRegular,
        padding: 8
    },
    Btn: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginLeft: 15,
        borderRadius: 10,
    }
})
export default App