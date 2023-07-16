import { styled } from "styled-components";

export const InquireBack = styled.div`
  width: 100vw;
  height: 100vh;

  background: #f3f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InquireWrap = styled.div`
  position: relative;
  max-width: 86%;
  padding: 50px;
  width: 1118px;
  height: 612px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);

  h3 {
    margin: 0;
    color: #0085ff;
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
  }

  & .inquire_content {
    margin: 0;
    margin-top: 30px;
    color: #2f2f2f;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .inquire_writetitle {
    display : flex;
    flex-direction: row;

    margin-top : 50px;
    margin-left : 10px;
    color: #2f2f2f;
    font-size: 25px;
  }

  .inquire_writetitle > input { 
    border:none;
    width : 400px;
    font-size: 20px;
    color : #2F2F2F;
    padding-left : 60px;
  }

  .inquire_writetitle > input:focus {
    outline : none;
  }

  .inquire_select {
    padding-right : 60px;
    padding-left : 100px;
  }

  .category {
    border-radius: 30px;
    padding-left : 20px; 
    font-size: 15px;
    width : 180px;
    height : 40px;
  }

  .inquire_writecontent {
    color: #2f2f2f;
    font-size: 25px;
    margin-left : 10px;
    margin-top : 30px;

    display : flex;
    flex-direction: row;    
  }

  .inquire_writecontent > textarea {
    resize : none;
    font-size: 20px;
    padding-left : 60px;
    margin-bottom : 40px;
    border:none;
    color: #2f2f2f;
  }

  .inquire_writecontent > textarea:focus {
    outline : none;
  }

  & .Btn_section {
    display: flex;
    position: relative;
    top: 30px;
    float : right;

    div {
      cursor: pointer;
      width: 97px;
      height: 45px;
      flex-shrink: 0;
      text-align: center;
      line-height: 45px;
    }

    & .back{
        cursor: pointer;
        border-radius: 30px;
        border: 1px solid #0085FF;
        background: #FFF;
        color: #0085FF;
        margin-right: 10px;
        font-weight: 700;        
    }

    & .inquire{
        border-radius: 30px;
        border: 1px solid #FFF;
        background: #0085FF;
        color:#ffffff;
        font-weight: 700;
    }
  }
`

export const inquireBtn = styled.div`
  
`