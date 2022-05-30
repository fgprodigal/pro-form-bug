import React, { useState } from "react";
import { BetaSchemaForm } from "@ant-design/pro-form";
import { Button } from "antd";
import "antd/dist/antd.css";

const Form = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const columns = [
    {
      dataIndex: "ProjectID",
      hideInSearch: true,
      hideInTable: true,
      formItemProps: { hidden: true }
    },
    {
      dataIndex: "Creator",
      hideInSearch: true,
      hideInTable: true,
      formItemProps: { hidden: true }
    },
    {
      title: "试验项目名称",
      dataIndex: "ProjectName",
      copyable: true,
      fixed: "left",
      ellipsis: true,
      formItemProps: { rules: [{ required: true }] },
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "方案编号",
      dataIndex: "SchemeID",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "临床试验登记号",
      dataIndex: "RegistrationID",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "人遗办备案号",
      dataIndex: "GeneticRecordID",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "试验药物/器械名",
      dataIndex: "DrugDeviceName",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "注册分类",
      dataIndex: "RegCategory",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "临床试验批件号",
      dataIndex: "BatchNumber",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "试验分期",
      dataIndex: "Stage",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "申办方",
      dataIndex: "Applicant",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "CRO公司",
      dataIndex: "CROCompany",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "SMO公司",
      dataIndex: "SMOCompany",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "组长单位",
      dataIndex: "LeaderWorkplace",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "承担科室",
      dataIndex: "Department",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "PI",
      dataIndex: "PI",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "PI电话",
      dataIndex: "PIPhone",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "立项资料递交日期",
      dataIndex: "SubmissionDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "立项资料审核日期",
      dataIndex: "AuditDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "立项资料补交日期",
      dataIndex: "SupplementDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "机构立项日期",
      dataIndex: "EstablishDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "伦理批件日期",
      dataIndex: "GeneticAuditDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "项目沟通会日期",
      dataIndex: "MeetingDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "立项费到账日期",
      dataIndex: "FeeArrivalDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "主协议",
      dataIndex: "MainProtocol",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "CRC协议",
      dataIndex: "CRCProtocol",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "合同签署日期",
      dataIndex: "ContractDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "合同总额",
      dataIndex: "ContractMoney",
      valueType: "money",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "首笔款到账日期",
      dataIndex: "FirstPaymentDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "首笔款到账金额",
      dataIndex: "FirstPaymentMoney",
      valueType: "money",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "第二笔款到账日期",
      dataIndex: "SecondPaymentDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "第二笔款到账金额",
      dataIndex: "SecondPaymentMoney",
      valueType: "money",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "第三笔款到账日期",
      dataIndex: "ThirdPaymentDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "第三笔款到账金额",
      dataIndex: "ThirdPaymentMoney",
      valueType: "money",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "尾款到账日期",
      dataIndex: "FinalPaymentDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "尾款到账金额",
      dataIndex: "FinalPaymentMoney",
      valueType: "money",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "启动日期",
      dataIndex: "StartDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "计划入组例数",
      dataIndex: "NumberPlanned",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "筛选例数",
      dataIndex: "NumberFiltered",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "实际入组例数",
      dataIndex: "NumberActual",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "完成例数",
      dataIndex: "NumberFinished",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "首例入组日期",
      dataIndex: "FirstEntryDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "最后一例出组日期",
      dataIndex: "LastLeaveDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "SAE例数",
      dataIndex: "SAECount",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "累计标本外送数量",
      dataIndex: "SentOutCount",
      valueType: "digit",
      fieldProps: { precision: 0 },
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "质控情况",
      dataIndex: "QualitySituation",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "其他",
      dataIndex: "Remark",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "文件夹位置",
      dataIndex: "FolderPosition",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "归档日期",
      dataIndex: "ArchiveDate",
      valueType: "date",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    },
    {
      title: "归档位置",
      dataIndex: "ArchivePosition",
      width: "md",
      colProps: {
        xs: 24,
        md: 12
      }
    }
  ];

  return (
    <>
      <BetaSchemaForm
        layoutType="DrawerForm"
        visible={drawerVisible}
        onVisibleChange={setDrawerVisible}
        columns={columns}
      />
      <Button onClick={() => setDrawerVisible(true)}>Open Drawer</Button>
    </>
  );
};

export default Form;
