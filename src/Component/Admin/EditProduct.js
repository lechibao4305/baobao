import React, { Component } from "react";
import axios from "axios";
import { Row, Form, Col, Button, Container } from "react-bootstrap";
class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeTen = this.onChangeTen.bind(this);
    this.onChangeHang = this.onChangeHang.bind(this);
    this.onChangeGia = this.onChangeGia.bind(this);
    this.onChangeTrangThai = this.onChangeTrangThai.bind(this);
    this.onChangeMoTa = this.onChangeMoTa.bind(this);
    this.onChangeHinh = this.onChangeHinh.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ten: "",
      hinh: "",
      mota: "",
      gia: 0,
      hang: "",
      trangthai: 0
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/items/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          ten: response.data.ten,
          hinh: response.data.hinh,
          mota: response.data.mota,
          gia: response.data.gia,
          hang: response.data.hang,
          trangthai: response.data.trangthai
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeTen(e) {
    this.setState({
      ten: e.target.value
    });
  }
  onChangeHang(e) {
    this.setState({
      hang: e.target.value
    });
  }
  onChangeGia(e) {
    this.setState({
      gia: e.target.value
    });
  }
  onChangeMoTa(e) {
    this.setState({
      mota: e.target.value
    });
  }
  onChangeTrangThai(e) {
    this.setState({
      trangthai: e.target.value
    });
  }
  onChangeHinh(e) {
    this.setState({
      hinh: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const obj = {
      ten: this.state.ten,
      gia: this.state.gia,
      trangthai: this.state.trangthai,
      hang: this.state.hang,
      mota: this.state.mota,
      hinh: this.state.hinh
    };
    axios
      .post(
        "http://localhost:4000/items/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/index");
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit} ref="myForm" className="myForm">
          <Form.Group controlId="ten">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              onChange={this.onChangeTen}
              value={this.state.ten}
              ref="ten"
              type="email"
              placeholder="Nhập tên sản phẩm"
            />
          </Form.Group>
          <Form.Group controlId="hinh">
            <Form.Label>Hình</Form.Label>
            <Form.Control
              onChange={this.onChangeHinh}
              value={this.state.hinh}
              ref="hinh"
              type=""
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="hang">
            <Form.Label>Hãng</Form.Label>
            <Form.Control
              onChange={this.onChangeHang}
              value={this.state.hang}
              ref="hang"
              as="select"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="gia">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              onChange={this.onChangeGia}
              value={this.state.gia}
              ref="gia"
              type=""
              placeholder="Nhập giá"
            />
          </Form.Group>
          <Form.Group controlId="mota">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              onChange={this.onChangeMoTa}
              value={this.state.mota}
              ref="mota"
              type=""
              placeholder="Nhập giá"
            />
          </Form.Group>
          <Form.Group controlId="trangthai">
            <Form.Label>Trạng Thái</Form.Label>
            <Form.Control
              onChange={this.onChangeTrangThai}
              value={this.state.trangthai}
              ref="trangthai"
              as="select"
            >
              <option>0</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          {/* <Link to="/Admin"> */}
          <Button type="submit" style={{ width: 100 }} variant="success">
            AddProduct
          </Button>
          {/* </Link> */}
        </Form>
      </Container>
    );
  }
}

export default EditProduct;
