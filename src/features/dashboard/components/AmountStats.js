function AmountStats({}) {
  return (
    <div className="stats bg-base-100 shadow">
      <div className="stat">
        <div className="stat-title">Cost per Provider</div>
        <div className="stat-value">$0.14</div>
        <div className={"stat-desc font-bold text-rose-500 dark:text-red-400"}>
          ↙ -95.92%
        </div>
      </div>
    </div>
  );
}

export default AmountStats;
