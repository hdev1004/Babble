import React from "react";
import { BottomSection, WithdrawalBg, WithdrawalWrap } from "./css/Withdrawal";
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { withdrawalAlertState } from "state/alert/alert_recoil";
import WithdrawalAlert from "global/alert/WithdrawalAlert";

const Withdrawal = () => {
    let navigate = useNavigate();
    const moveHandle = () => {
        navigate(-1);
    }

    const [withdrawal, setWithdrawal] = useRecoilState(withdrawalAlertState)

  return (
    <WithdrawalBg>
      <WithdrawalAlert show={withdrawal} setShow={setWithdrawal}></WithdrawalAlert> 
      <WithdrawalWrap>
        <h3>회원 탈퇴 서비스</h3>
        <p className="title_content">
          회원 탈퇴를 진행하기 전에 주의사항을 확인한 후 진행해 주세요! <br />
          탈퇴 이후에는 계정을 되돌릴 수 없습니다.
        </p>
        <hr />
        <h4 style={{ marginBottom: "15px" }}>게시판 이용 기록 삭제</h4>
        <p className="content">
          게시글과 댓글 모두가 삭제되며, 삭제된 데이터는 복구되지 않습니다.
          <br />
          중요한 데이터는 탈퇴하기 전에 미리 백업해 주시기 바랍니다.
        </p>
        <h4 style={{ marginBottom: "15px" }}>삭제 후 제한</h4>
        <p className="content mb">
          탈퇴 서비스를 이용한 사용자의 계정은 바로 삭제되고 이전 상태로 복구할
          수 없습니다.
          <br />
          또한, 다시 이용을 원하는 사용자는 회원가입을 진행한 후에 서비스 이용이
          가능합니다.
        </p>
        <p className="content mb">
          SNS(네이버, 카카오톡)로 가입한 계정 탈퇴 시, 같은 계정으로 재가입할 수
          없습니다.
        </p>

        <p className="content mb">
          친구 관계가 모두 끊어지며 상대방에게는 알려지지 않습니다.
        </p>

        
        <BottomSection>
          <div>
            <input type="checkbox" />
            <span>안내 사항을 모두 확인했으며, 회원 탈퇴에 동의합니다.</span>
          </div>

          <div className="Btn_section">
            <div className="back" onClick={()=>{moveHandle()}}>취소</div>
            <div className="check" onClick={() => {setWithdrawal(true)}}>탈퇴</div>
          </div>
        </BottomSection>
      </WithdrawalWrap>
    </WithdrawalBg>
  );
};

export default Withdrawal;
