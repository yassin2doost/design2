import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import { connect } from "react-redux";
import Icon from "../Icon";
import {
  AnimatedContainer,
  Cover,
  Image,
  Title,
  Subtitle,
  Content,
  CloseView
} from "./style";
import MenuItem from "../menuItems/MenuItems";
import { openMenu, closeMenu } from "../../actions/menuActions";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Menu extends Component {
  state = {
    top: new Animated.Value(SCREEN_HEIGHT)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.toggleMenu === "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 0
      }).start();
    }
    if (this.props.closeMenu) {
      Animated.spring(this.state.top, {
        toValue: SCREEN_HEIGHT
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image
            source={require("../../../assets/images/avatar.jpg")}
            resizemod="contain"
          />
          <View style={{ verticalAlign: true }}>
            <Title> سروش نظریان </Title>
            <Subtitle> امتیاز: ۲۲ </Subtitle>
          </View>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={styles.touchable}
        >
          <CloseView>
            <Icon name="close" size={50} />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              size={36}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const mapStateToProps = state => ({
  toggleMenu: state.toggleMenu
});

export default connect(
  mapStateToProps,
  { openMenu, closeMenu }
)(Menu);

const styles = StyleSheet.create({
  touchable: {
    position: "absolute",
    top: 228,
    left: "50%",
    marginLeft: -22,
    zIndex: 1
  }
});

const items = [
  {
    icon: "settings",
    title: "حساب کاربری",
    text: "تنظیمات"
  },
  {
    icon: "card",
    title: "تراکنش ها",
    text: "پرداخت ها"
  },
  {
    icon: "compass",
    title: "سوال از وکیل",
    text: "تعیین وقت"
  },
  {
    icon: "exit",
    title: "خروج",
    text: "به امید دیدار"
  }
];
